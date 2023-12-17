from cryptography.fernet import Fernet

with open('mykey.key','rb') as mykey:
    key = mykey.read()

f = Fernet(key)

with open('file', 'rb') as encrypted_files:
    encrypted = encrypted_files.read()
    
decrypted = f.decrypt(encrypted)

with open('johndoe_decrypted.json', 'wb') as decrypted_file:
    decrypted_file.write(decrypted)
    
    