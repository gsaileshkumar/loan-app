import logging


logging.basicConfig(
    format="[%(asctime)s],%(msecs)d %(name)s %(levelname)s [%(filename)s:%(lineno)s - %(funcName)20s() ] %("
    "message)s",
    datefmt="%m/%d/%Y %I:%M:%S %p",
    level=logging.INFO,
)
