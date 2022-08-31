import {IUser} from '@/interfaces/user';
import {Options, Vue} from 'vue-class-component';
import MenuItem from '@/components/menu-item/menu-item.vue';

@Options({
    name: 'app-menu-sidebar',
    components: {
        'app-menu-item': MenuItem
    }
})
export default class MenuSidebar extends Vue {
    public menu = MENU;
    get user(): IUser {
        return this.$store.getters['auth/user'];
    }

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}

export const MENU = [
    {
        name: 'Reportes',
        path: '/'
    },
    // {
    //     name: 'labels.blank',
    //     path: '/blank'
    // },
    {
        name: 'Remisiones-Contraremisiones',
        children: [
            {
                name: 'Registrar',
                path: '/sub-menu-1'
            },

            {
                name: 'Atender',
                path: '/sub-menu-2'
            }
        ]
    }
];
