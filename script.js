function toggleForms() {
    const registerDiv = document.getElementById('registerDiv');
    const loginDiv = document.getElementById('loginDiv');
    registerDiv.style.display = registerDiv.style.display === 'none' ? 'block' : 'none';
    loginDiv.style.display = loginDiv.style.display === 'none' ? 'block' : 'none';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.username === username);
    
    if (userExists) {
        alert("User already exists. Please login.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    toggleForms();
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!username || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        document.getElementById('authForm').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function logout() {
    alert("You have logged out.");
    document.getElementById('authForm').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
}
