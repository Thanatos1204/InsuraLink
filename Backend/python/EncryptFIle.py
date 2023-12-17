from cryptography.fernet import Fernet

# key = Fernet.generate_key()

# with open('mykey.key','wb') as mykey:
#     mykey.write(key)

with open('mykey.key','rb') as mykey:
    key = mykey.read()
    
f = Fernet(key)
# ENCRYPTION OF FILE

# with open('johndoe.json', 'rb') as original_file:
#     original = original_file.read()
    
# encrypted = f.encrypt(original)


# with open('johndoe_encrypt.txt', 'wb') as encrypted_file:
#     encrypted_file.write(encrypted)


# f = Fernet(key)

with open('johndoe_encrypt.txt', 'rb') as encrypted_files:
    encrypted = encrypted_files.read()
    
decrypted = f.decrypt(encrypted)

with open('johndoe_decrypted.json', 'wb') as decrypted_file:
    decrypted_file.write(decrypted)
    
