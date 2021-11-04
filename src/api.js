



export const site_name = "Study Group"

export const auth_service = "https://study-group-auth.herokuapp.com"
export const api_signin = `${auth_service}/login`
export const api_signup = `${auth_service}/register`

export const user_service = "https://study-group-user.herokuapp.com"
export const api_user_info = `${user_service}/users/info`
export const api_user_status = `${user_service}/users/status`
export const api_user_add_gudsub = `${user_service}/add/good/subject`
export const api_user_add_badsub = `${user_service}/add/bad/subject`

export const mail_service = "https://study-group-mail.herokuapp.com"
export const group_service = "https://study-group-group.herokuapp.com"
export const api_group_user = `${group_service}/group`
export const api_group_server = `${group_service}/group/server`
export const api_group_join = `${group_service}/group/join`

export const member_service = "https://study-group-member.herokuapp.com"
export const test_service = "https://study-group-test.herokuapp.com"
export const question_service = "https://study-group-question.herokuapp.com"
export const history_service = "https://study-group-history.herokuapp.com"
export const upload_service = "https://study-group-upload.herokuapp.com"

export const socket_cluster = "https://study-group-socket-cluster.herokuapp.com"
export const socket_chat = `${socket_cluster}/chat`
export const socket_chat_noti = `${socket_cluster}/notifyChat`
export const socket_noti = `${socket_cluster}/notify`


export const chat_service = "https://study-group-chat.herokuapp.com"
export const notify_service = "https://study-group-notify.herokuapp.com"

export const search_service = "https://study-group-search.herokuapp.com"
export const api_search_group = `${search_service}/search/group`
export const api_search_users = `${search_service}/search/users`

export const list_sub = [
    "Toán",
    "Ngữ văn",
    "Sinh học",
    "Vật lý",
    "Hóa học",
    "Lịch sử",
    "Địa lý",
    "Tiếng Anh", "Tiếng Nga", "Tiếng Pháp", "Tiếng Trung Quốc", "Tiếng Nhật", "Tiếng Đức",
    "Công nghệ",
    "Tin học",
    "Âm nhạc",
    "Mĩ thuật"
]

export const classes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
]