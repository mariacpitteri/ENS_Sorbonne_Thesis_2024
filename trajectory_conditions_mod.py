import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from copy import deepcopy
from typing import List, Tuple, Dict, Union
from dataclasses import dataclass
from enum import Enum

# Define a constant representing the cutoff value for expected value (EV)
EV_CUTOFF_VALUE: int = 5


# Define an enumeration class to represent different pair type criteria
class PairTypeCriteria(Enum):

    # Criteria for pairs with high difference, large variance, and EV close to zero
    HDIFF_HVAR_EVZERO: str = "high difference, large variance, EV close to zero"

    # Criteria for pairs with high difference, large variance, and EV greater than zero
    HDIFF_HVAR_EVGRZERO: str = "high difference, large variance, EV > 0"

    # Criteria for pairs with high difference, large variance, and EV less than zero
    HDIFF_HVAR_EVLRZERO: str = "high difference, large variance, EV < 0"

    # Criteria for pairs with low value and EV close to zero
    LOW_VALUE_EVZERO: str = "low value, EV close to 0"

    # Criteria for pairs with low value and EV greater than zero
    LOW_VALUE_POSITIVE: str = "low value, EV > 0"

    # Criteria for pairs with low value and EV less than zero
    LOW_VALUE_NEGATIVE: str = "low value, EV < 0"


class CardPair:
    def __init__(self, card_pair: Tuple[int, int]) -> None:
        """
        Initializes a CardPair object with a tuple representing a pair of cards.

        Args:
            card_pair (Tuple[int, int]): Tuple representing a pair of cards.
        """
        self.pair: Tuple[int, int] = card_pair

    @property
    def mean(self) -> float:
        """
        Calculates and returns the mean of the card pair.
        """
        return self._mean()

    @property
    def var(self) -> float:
        """
        Calculates and returns the variance of the card pair.
        """
        return self._var()

    @property
    def delta(self) -> float:
        """
        Calculates and returns the difference between the highest and lowest values in the card pair.
        """
        return self._delta()

    def _mean(self) -> float:
        """
        Internal method to calculate the mean of the card pair.
        """
        return np.mean(self.pair)

    def _var(self) -> float:
        """
        Internal method to calculate the variance of the card pair.
        """
        return np.var(self.pair)

    def _delta(self) -> float:
        """
        Internal method to calculate the difference between the highest and lowest values in the card pair.
        """
        return max(self.pair) - min(self.pair)

    def __eq__(self, value: object) -> bool:
        """
        Overrides the equality comparison method.

        Returns True if the pairs are equal after sorting, False otherwise.
        """
        # Equality if the pairs are equal after sorting
        return sorted(list(self.pair)) == sorted(list(value.pair))

    def __hash__(self) -> int:
        """
        Overrides the hashing method.

        Returns a hash based on the sorted tuple of the pair.
        """
        # Hash based on the sorted tuple of the pair
        return hash(tuple(sorted(self.pair)))


class Round:
    def __init__(
        self, round_number: int, deck: List[int], difference_threshold: float
    ) -> None:
        """
        Initializes a Round object with the round number, deck of cards, and difference threshold.

        Args:
            round_number (int): The number of the round.
            deck (List[int]): List representing the deck of cards.
            difference_threshold (float): The threshold for card pair differences.
        """
        self.round_number: int = round_number
        self.deck: List[int] = deck
        self.difference_threshold: float = difference_threshold

        self.pairs_of_cards: List[CardPair] = generate_card_pairs(self.deck)


class CardGame:
    def __init__(
        self,
        number_of_rounds: int,
        permitted_card_range: np.ndarray,
        deck_size: int,
        difference_threshold: int,
        expected_value_offset: float = 0,
        is_bust: bool = False,
    ) -> None:
        """
        Initializes a CardGame object with parameters defining the game.

        Args:
            number_of_rounds (int): Number of rounds in the game.
            permitted_card_range (np.ndarray): Permitted range of card values.
            deck_size (int): Size of the deck.
            difference_threshold (int): Threshold for card pair differences.
            expected_value_offset (float): Offset for expected value calculation.
            is_bust (bool): Whether the game includes bust conditions.
        """
        # Initalises game parameters
        self.number_of_rounds: int = number_of_rounds
        self.is_bust: bool = is_bust
        self.deck_size: int = deck_size
        self.difference_threshold: int = difference_threshold
        self.permitted_card_range: np.ndarray = permitted_card_range
        self.expected_value_offset: float = expected_value_offset

        # Initalising variables to characterise the game
        self.deck: List[int] = []
        self.pairs_sequence: List[Tuple[int, int]]

    def deck_statistics(self) -> Tuple[float, float]:
        """
        Calculate and return the mean and variance of the deck.
        """
        return np.mean(self.deck), np.var(self.deck)

    def __eq__(self, object: object) -> bool:
        """
        Override the equality comparison method.

        Compares the round choices of the current object with another object.
        """
        rounds_equality: List[bool] = []
        for round in range(self.number_of_rounds):
            round_is_equal = self.round_choices[round] == object.round_choices[round]
            rounds_equality.append(round_is_equal)

        equal_rounds: List[bool] = [round for round in rounds_equality if round is True]

        if len(equal_rounds) == self.number_of_rounds:
            return True
        else:
            return False

    def __hash__(self) -> int:
        """
        Override the hashing method.

        Returns a hash based on the sorted tuple of all card pairs in the game.
        """
        all_cards: List[Tuple[int, int]] = []
        for round in range(self.number_of_rounds):
            card_choices: List[Tuple[int, int]] = [
                self.round_choices[round][name].pair
                for name in self.round_choices[round].keys()
            ]
            all_cards.extend(card_choices)
        all_cards: Tuple[Tuple[int, int]] = tuple(all_cards)
        return hash(all_cards)

    def generate_game(self) -> None:
        """
        Generate a valid game by creating rounds and matching pairs of cards based on criteria.
        """
        criteria_dictionary: Dict[PairTypeCriteria, List[CardPair]] = {}
        valid_deck: bool = False
        while not valid_deck:
            # Generating the deck
            raw_deck: np.ndarray = (
                np.random.choice(
                    list(self.permitted_card_range), self.deck_size, replace=False
                )
                + self.expected_value_offset
            )

            # Sort the deck
            sorted(raw_deck)

            # Taking the max and min values of the deck
            max_deck_value: int = max(raw_deck)
            min_deck_value: int = min(raw_deck)

            # Excluding too narrow decks
            if max_deck_value - min_deck_value < self.difference_threshold:
                continue

            # From the raw deck, getting the pairs
            pairs_of_cards: List[CardPair] = generate_card_pairs(raw_deck)

            # Checking our existence conditions
            for criteria in PairTypeCriteria:
                sublist: List[CardPair] = self.criteria_sublist(
                    pairs_of_cards,
                    criteria,
                )
                if len(sublist) < 3:
                    # reset the dictionary
                    criteria_dictionary = {}
                    continue
                else:
                    sublist_length: int = len(sublist)
                    # If less than the number of rounds, add one of the elements back to the list
                    while sublist_length < self.number_of_rounds:
                        addition_choice: CardPair = np.random.choice(
                            sublist, 1, replace=True
                        )[0]
                        sublist.append(addition_choice)
                        sublist_length = len(sublist)
                    criteria_dictionary[criteria.name] = sublist

            exhaustive: bool = False
            if len(criteria_dictionary.keys()) == len(
                PairTypeCriteria
            ):  # this is why the code was breaking before, fixed
                # We have something that resembles a valid deck at this point
                round_dictionary: Dict[int, List[CardPair]] = {}
                round_attempts: int = 0
                for round in range(self.number_of_rounds):
                    # Copying the deck for the round
                    deck_copy: List[int] = deepcopy(raw_deck)
                    round_pairs: Dict[PairTypeCriteria, CardPair] = {}
                    for iter, criteria in enumerate(criteria_dictionary):
                        in_deck: bool = False
                        pair_cache: List[CardPair] = []
                        while not in_deck:
                            # While the card is not in the deck, we pick a random one and test
                            random_pair: CardPair = np.random.choice(
                                criteria_dictionary[criteria], 1, replace=True
                            )[0]
                            pair_cache.append(random_pair)

                            if set(list(pair_cache)) == set(
                                list(criteria_dictionary[criteria])
                            ):
                                exhaustive = True
                                break

                            # Testing if in deck
                            if (random_pair.pair[0] in deck_copy) and (
                                random_pair.pair[1] in deck_copy
                            ):
                                in_deck = True

                                # Now add to our round pairs
                                round_pairs[criteria] = random_pair

                        if exhaustive:
                            # Recording the number of times we attempt the round
                            round_attempts += 1
                            break

                        # Choosing the elements from the random pair to remove from the deck
                        for card in random_pair.pair:
                            # Finds the index of the card and pops it from the list
                            deck_copy = list(deck_copy)
                            deck_copy.pop(deck_copy.index(card))

                    # If exhaustive and attempted to fill the round 5 times, then break
                    if exhaustive and round_attempts == 10:
                        break

                    round_dictionary[round] = round_pairs

                # Now need to stitch together the decks
                if not exhaustive:
                    valid_deck = True

        # Writes the valid deck to memory
        self.deck: List[int] = raw_deck
        self.deck_by_criteria: Dict[PairTypeCriteria, List[CardPair]] = (
            criteria_dictionary
        )
        self.round_choices: Dict[int, Dict[PairTypeCriteria, CardPair]] = (
            round_dictionary
        )
        print("Generated pair!")

    def round_variance(
        self, unique: bool = True
    ) -> Union[int, Dict[PairTypeCriteria, int]]:
        # Create a notion of variance in the rounds

        variance_dictionary: Dict[PairTypeCriteria, int] = {}

        for criteria in PairTypeCriteria:
            # List per criteria
            criteria_list: List[CardPair] = []
            for round in self.round_choices:
                # Picking out the pair for that criteria
                criteria_list.append(self.round_choices[round][criteria.name])

            # Counting the number of unique pairs for that criteria type
            criteria_list = list(set(criteria_list))

            # Appending to our variance dictionary
            variance_dictionary[criteria] = len(criteria_list)

        if unique:
            # Return the number of draws - the occurrence
            max_occ: int = min(
                [variance_dictionary[name] for name in variance_dictionary.keys()]
            )
            return max_occ
        else:
            return variance_dictionary

    def deck_mean(self) -> float:
        return np.mean(self.deck)

    def criteria_sublist(
        self,
        pairs_of_cards: List[CardPair],
        criteria: PairTypeCriteria,
    ) -> List[CardPair]:
        output_choices: List[CardPair] = []

        for pair in pairs_of_cards:
            # Getting the mean of the pair
            mean_value: float = pair.mean
            difference_value: float = pair.delta

            match criteria:
                # Matching the case where there is a high difference and mean close to zero
                case PairTypeCriteria.HDIFF_HVAR_EVZERO:
                    if (abs(mean_value) <= 0.5) and (
                        difference_value >= self.difference_threshold
                    ):
                        output_choices.append(pair)
                case PairTypeCriteria.HDIFF_HVAR_EVGRZERO:
                    if (mean_value > EV_CUTOFF_VALUE) and (
                        difference_value >= self.difference_threshold - 3
                    ):
                        output_choices.append(pair)
                case PairTypeCriteria.HDIFF_HVAR_EVLRZERO:
                    if (mean_value < -EV_CUTOFF_VALUE) and (
                        difference_value >= self.difference_threshold - 3
                    ):
                        output_choices.append(pair)
                case PairTypeCriteria.LOW_VALUE_EVZERO:
                    if (-0.5 <= mean_value <= 0.5) and (
                        difference_value <= self.difference_threshold
                    ):
                        output_choices.append(pair)

                case PairTypeCriteria.LOW_VALUE_POSITIVE:
                    # Define high value as within half of the tolerance of the max value
                    if (0 <= mean_value <= EV_CUTOFF_VALUE) and (
                        difference_value <= self.difference_threshold - 5
                    ):
                        output_choices.append(pair)
                case PairTypeCriteria.LOW_VALUE_NEGATIVE:
                    # Define high value as within half of the tolerance of the max value
                    if (-EV_CUTOFF_VALUE <= mean_value <= 0) and (
                        difference_value <= self.difference_threshold - 5
                    ):
                        output_choices.append(pair)

        return output_choices


def generate_card_pairs(deck: List[int]) -> List[CardPair]:
    # Generate all of the possible pairs of cards
    all_pairs: List[CardPair] = []

    # Iterating from a base card
    for iter, base_card in enumerate(deck):
        try:
            for upper_card in deck[iter + 1 :]:
                card_pair: CardPair = CardPair((base_card, upper_card))
                if card_pair not in all_pairs:
                    all_pairs.append(card_pair)
        except Exception as e:
            pass

    return all_pairs


class Experiment:
    def __init__(
        self,
        number_of_trials: float,
        deck_size: int,
        expected_value: float = 0,
        card_threshold: int = 8,
        rounds_per_game: int = 5,
        lower_permitted_value: int = -11,
        upper_permitted_value: int = 11,
    ) -> None:
        self.number_of_trials: int = number_of_trials
        self.rounds_per_game: int = rounds_per_game
        self.expected_value: float = expected_value
        self.card_threshold: int = card_threshold
        self.deck_size: int = deck_size

        # Defining the permitted range for the card choices
        self.card_range: np.ndarray = np.arange(
            lower_permitted_value, upper_permitted_value
        )

        # Initialising data storage for the experiment
        self.all_decks: List[CardGame] = []

    def generate_all_decks(self) -> None:
        for _ in range(self.number_of_trials):
            # Generating random decks
            card_game: CardGame = CardGame(
                number_of_rounds=self.rounds_per_game,
                permitted_card_range=self.card_range,
                deck_size=self.deck_size,
                difference_threshold=self.card_threshold,
                expected_value_offset=self.expected_value,
            )
            card_game.generate_game()
            self.all_decks.append(card_game)

    def sort_decks(self) -> None:
        all_decks: List[CardGame] = self.all_decks

        # Sorting decks by the notion of variance
        all_decks = sorted(all_decks, key=lambda x: x.round_variance())
        self.all_decks = all_decks


if __name__ == "__main__":

    exp = Experiment(
        number_of_trials=100,
        deck_size=18,
        expected_value=0,
    )
    exp.generate_all_decks()

    # Removing duplicates
    exp.all_decks = list(set(exp.all_decks))

    exp.sort_decks()

    for iter in range(5):
        sim = 95
        print(
            {
                name: exp.all_decks[sim].round_choices[iter][name].pair
                for name in exp.all_decks[sim].round_choices[iter]
            },
            exp.all_decks[sim].round_variance(),
            exp.all_decks[sim].deck_mean(),
        )

    # Plotting the criteria - one plot for each criteria type
    fix, axes = plt.subplots(len(PairTypeCriteria), 1, figsize=(5, 5))

    # Iterating through
    for iter, criteria in enumerate(PairTypeCriteria):

        # Recording the mean value of each pair for the last 20 simulations. One number per round, per 20 sims
        values: List[float] = []
        for simulation in range(80, 100):  # change this range to get more or less sims

            # Extending the values list by the amounts per game
            values.extend(
                [
                    exp.all_decks[simulation].round_choices[round][criteria.name].mean
                    for round in range(5)
                ]  # getting all the values per round
            )

        # Plotting as a scatter plot
        axes[iter].scatter([x for x in range(len(values))], values)

# To access each deck of the simulation, you have to access the ".all_decks" attribute in the experiment. This
# is a list of all of the CardGame objects, for which you can iterate through the "round_choices" (a dictionary
# mapping the round number to the pairs of cards for each criteria type) to access the pairs.
b = 1


# Export data to excel
# Create an empty list to store data
data = []

for game in exp.all_decks:
    deck = game.deck
    # pairs per round
    for round_number in game.round_choices:
        # High difference, EV around 0
        pair_1 = game.round_choices[round_number][
            PairTypeCriteria.HDIFF_HVAR_EVZERO.name
        ].pair
        # High difference, EV > 0
        pair_2 = game.round_choices[round_number][
            PairTypeCriteria.HDIFF_HVAR_EVGRZERO.name
        ].pair
        # High difference, EV < 0
        pair_3 = game.round_choices[round_number][
            PairTypeCriteria.HDIFF_HVAR_EVLRZERO.name
        ].pair
        # Low difference, EV around 0
        pair_4 = game.round_choices[round_number][
            PairTypeCriteria.LOW_VALUE_EVZERO.name
        ].pair
        # Low difference, EV > 0
        pair_5 = game.round_choices[round_number][
            PairTypeCriteria.LOW_VALUE_POSITIVE.name
        ].pair
        # Low difference, EV < 0
        pair_6 = game.round_choices[round_number][
            PairTypeCriteria.LOW_VALUE_NEGATIVE.name
        ].pair
        # Append data to the list
        data.append(
            {
                "Experiment": game,
                "Deck": ",".join(map(str, deck)),
                "Round": round_number,
                "Pair 1": ",".join(map(str, pair_1)),
                "Pair 2": ",".join(map(str, pair_2)),
                "Pair 3": ",".join(map(str, pair_3)),
                "Pair 4": ",".join(map(str, pair_4)),
                "Pair 5": ",".join(map(str, pair_5)),
                "Pair 6": ",".join(map(str, pair_6)),
            }
        )

# Slice the data to get the last 20 games
last_20_games_data = data[-100:]

# Create a DataFrame from the list of data for the last 20 games
df_last_20_games = pd.DataFrame(last_20_games_data)
df = pd.DataFrame(data)

# Save DataFrame to Excel file
df_last_20_games.to_excel("traj_cond2_last_20_games.xlsx", index=False)
df.to_excel("traj_cond2.xlsx", index=False)

# Save DataFrame to CSV file with delimiter ;
df_last_20_games.to_csv("traj_cond2_last_20_games.csv", sep=";", index=False)
