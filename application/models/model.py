class Model(object):
    __instance = None

    def __new__(cls):
        if cls.__instance == None:
            cls.__instance = super(Model, cls).__new__(cls)
        return cls.__instance
