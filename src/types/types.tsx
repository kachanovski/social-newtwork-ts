export type rootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}


export type dialogPageType = {
    messages: Array<messageType>
    newMessage: string
}
type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    date: any
    id: number
    message: string
}

export type profilePageType = {
    newText: string
    posts: Array<postsType>
}
export type postsType = {
    id: number
    textPost: string
    likesCount: number
}

export type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    name: string
    status: string | null
    photos: object | null
    folowed: boolean
}