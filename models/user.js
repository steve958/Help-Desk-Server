class User {
    constructor(id, user_type, username, password, first_name, last_name, email, phone, user_company_projects) {
        this.id = id;
        this.user_type = user_type;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone = phone;
        this.user_company_projects = user_company_projects
    }
}

module.exports = User