import {Options, Vue} from 'vue-class-component';
import Checkbox from '@/components/checkbox/checkbox.vue';
import {
    NAVBAR_DARK_VARIANTS,
    NAVBAR_LIGHT_VARIANTS,
    SIDEBAR_DARK_SKINS,
    SIDEBAR_LIGHT_SKINS
} from '@/utils/themes';
import {PfSelect} from '@profabric/vue-components';
export interface Option {
    label: string;
    value: string | number;
}

@Options({
    name: 'app-control-sidebar',
    components: {
        'app-checkbox': Checkbox,
        'pf-select': PfSelect
    }
})
export default class ControlSidebar extends Vue {
    private navbarLightVariants: Array<Option> = NAVBAR_LIGHT_VARIANTS;
    private navbarDarkVariants: Array<Option> = NAVBAR_DARK_VARIANTS;
    private darkSidebarSkins: Array<Option> = SIDEBAR_DARK_SKINS;
    private lightSidebarSkins: Array<Option> = SIDEBAR_LIGHT_SKINS;

    public handleDarkModeChange() {
        this.$store.dispatch('ui/toggleDarkMode');
    }

    public onNavbarVariantChange(event: any) {
        this.$store.dispatch('ui/setNavbarVariant', event.target.value);
    }

    public onSidebarSkinChange(event: any) {
        this.$store.dispatch('ui/setSidebarSkin', event.target.value);
    }

    get darkModeSelected() {
        return this.$store.getters['ui/darkModeSelected'];
    }

    get navbarVariant() {
        return this.$store.getters['ui/navbarVariant'];
    }

    get sidebarSkin() {
        return this.$store.getters['ui/sidebarSkin'];
    }
}
