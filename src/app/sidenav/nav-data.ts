import { INavbarData } from "./helper";

export const navbarData: INavbarData[]= [
    {
        routeLink: 'home',
        icon: 'fal fa-home',
        label: 'Home'
    },
    {
        routeLink: 'calendrier',
        icon: 'fal fa-calendar',
        label: 'Calendrier'
    },
    
    {
        routeLink: 'dashboard',
        icon: 'fal fa-circle',
        label: 'Dashboard'
    },
    {
        routeLink: 'message',
        icon: 'fal fa-comment',
        label: 'Message'
    },
    {
        routeLink: 'fiches',
        icon: 'fal fa-file',
        label: 'Fiches',
        items: [
            {
                routeLink: 'fiches/stage',
                label: 'Stage Fiches'

            },
            {
                routeLink: 'fiches/sortie',
                label: 'Sortie Fiches'

            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
        items: [
            {
                routeLink: 'settings/profile',
                label: 'Profile'

            },
            {
                routeLink: 'settings/deconnexion',
                label: 'Deconnexion'

            }
        ]
    },

];