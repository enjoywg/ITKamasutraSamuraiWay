export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendType = {
    img: string
}
export type SidebarType = {
    friends: Array<FriendType>
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: StateType= {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 0},
            {id: 2, message: 'How are you?', likesCount: 2},
            {id: 3, message: 'Go to drink', likesCount: 22},
            {id: 4, message: 'I never sleep', likesCount: 1},
            {id: 5, message: 'I want to eat', likesCount: 1000}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Denis'},
            {id: 4, name: 'Vika'},
            {id: 5, name: 'Olya'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Go to drink'},
            {id: 4, message: 'I never sleep'},
            {id: 5, message: 'I want to eat'}
        ]
    },
    sidebar: {
        friends: [
            {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
            {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
            {img: "https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"},
        ]
    }
}

export default state