import math
import random
from datetime import datetime, timedelta
from pathlib import Path


START_DATE = datetime(2023, 9, 20, hour=0)
END_DATE = START_DATE + timedelta(days=2)


def int_or_nan() -> float:
    chance = random.randint(0, 10)
    if chance < 3:
        return math.nan
    else:
        return random.randint(263, 313)


times = [START_DATE + timedelta(minutes=i) for i in range(86400)]
values = [f"{dt}, {int_or_nan()}" for dt in times]

Path("values.csv").write_text("\n".join(values))
