import pytest

from grade_tracker import GradeTracker


def test_average_calculation():
    tracker = GradeTracker(["Alice", "Bob", "Charlie"], [80, 90, 70])
    assert tracker.calculate_average() == 80.0


def test_highest_score():
    tracker = GradeTracker(["Alice", "Bob", "Charlie"], [80, 90, 70])
    assert tracker.highest_score() == ("Bob", 90)


def test_add_student():
    tracker = GradeTracker(["Alice"], [80])
    tracker.add_student("Daniel", 95)
    assert tracker.students == ["Alice", "Daniel"]
    assert tracker.marks == [80, 95]


def test_find_student():
    tracker = GradeTracker(["Alice", "Bob"], [85, 92])
    assert tracker.find_student("Bob") == 92
    assert tracker.find_student("Zoe") is None
