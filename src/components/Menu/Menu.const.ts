import { IconType } from "../Icons/Icon"

export type MenuItem = {
    name: string,
    url: string,
    icon: IconType
    showOnMobile: boolean
}

export const MainMenuItems: MenuItem[] = [
    {
        name: 'Home',
        url: '/',
        icon: "Home",
        showOnMobile: true
    },
    {
        name: 'Games',
        url: '#',
        icon: "Games",
        showOnMobile: true
    },
    {
        name: 'Activity',
        url: '#',
        icon: "Activity",
        showOnMobile: true
    },
    {
        name: 'Account',
        url: '#',
        icon: "Account",
        showOnMobile: true
    },
    {
        name: 'Tips',
        url: '#',
        icon: "Tips",
        showOnMobile: false
    },
]