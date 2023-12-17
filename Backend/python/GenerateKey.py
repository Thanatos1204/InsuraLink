from cryptography.fernet import Fernet


def generate_key():
    key = Fernet.generate_key()
    return key


# Saving the key in a FireBase

