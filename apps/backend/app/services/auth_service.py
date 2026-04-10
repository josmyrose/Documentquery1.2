from app.core.security import hash_password, verify_password, create_access_token

fake_users: dict[str, str] = {}


def register_user(email: str, password: str):
    if email in fake_users:
        raise Exception("User already exists")

    fake_users[email] = hash_password(password)
    return {"message": "User created"}


def login_user(email: str, password: str):
    if email not in fake_users:
        raise Exception("User not found")

    hashed_password = fake_users[email]

    if not verify_password(password, hashed_password):
        raise Exception("Invalid password")

    access_token = create_access_token({"sub": email})
    return {
        "access_token": access_token,
        "token_type": "bearer",
    }