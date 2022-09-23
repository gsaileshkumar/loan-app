from app.utils.logs import logging as logger


class DataProcessingException(Exception):
    def __init__(self, error):
        self.message = f"Data Processing Error"
        self.error = error


def handle_data_processing_exception(func):
    def wrapper(*args, **kwargs):
        try:
            result = func(*args, **kwargs)
            return result
        except (TypeError, ValueError, KeyError, AttributeError, IndexError) as error:
            logger.error(
                f"Data processing Exception in function [{func.__name__}]: {type(error).__name__} {error}"
            )
            raise DataProcessingException(error)

    return wrapper
