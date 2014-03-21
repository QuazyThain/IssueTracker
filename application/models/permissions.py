from models.model import Model
from models.db import DB


class Permissions(Model):
    _db = None

    def __init__(self):
        super(Permissions, self).__init__()
        self._db = DB()

    def _collection(self):
        self._db.collection("users")

    def check(self):
        pass


permissions = Permissions()
