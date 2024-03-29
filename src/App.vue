<template>
	<div v-if="this.currentUser" :class="containerClass" @click="onWrapperClick">
        <AppTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <AppMenu :model="adminMenu" @menuitem-click="onMenuItemClick" v-if="this.currentRole == 'Super Admin'" />
			<!-- <AppMenu :model="hodMenu" @menuitem-click="onMenuItemClick" v-else-if="this.currentUser.role_id == 2" /> -->
			<AppMenu :model="teacherMenu" @menuitem-click="onMenuItemClick" v-else-if="this.currentRole == 'Teacher'" />
			<AppMenu :model="studentMenu" @menuitem-click="onMenuItemClick" v-else-if="this.currentRole == 'Student'" />
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                <router-view />
            </div>
            <AppFooter />
        </div>
        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
	<div v-else>
		<div class="layout-main-container">
            <div class="layout-main">
                <router-view />
            </div>
        </div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppMenu from './AppMenu.vue';
import AppFooter from './AppFooter.vue';

export default {
    data() {
        return {
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            adminMenu : [
                {
                    label: 'Home',
                    items: [{
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
                    }]
                },
				{
					label: 'Administration', icon: 'pi pi-fw pi-sitemap',
					items: [
						{label: 'Roles', icon: 'pi pi-fw pi-id-card', to: '/roles'},
						{label: 'Users', icon: 'pi pi-fw pi-check-square', to: '/users'},
						{label: 'Subjects', icon: 'pi pi-fw pi-id-card', to:'/subjects'},
						{label: 'Colleges', icon: 'pi pi-fw pi-id-card', to:'/colleges'},
					]
				},
            ],
			studentMenu : [
				{
                    label: 'Home',
                    items: [{
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
                    }]
                },
				{
					label: 'Menu', icon: 'pi pi-fw pi-sitemap',
					items: [
						{ label: 'Assignments', icon: 'pi pi-fw pi-id-card', to: '/assignments' },
					]
				},
			],
			hodMenu : [
                {
                    label: 'Home',
                    items: [{
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
                    }]
                },
            ],
			teacherMenu : [
                {
                    label: 'Home',
                    items: [{
                        label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
                    }]
                },
				{
					label: 'Administration', icon: 'pi pi-fw pi-sitemap',
					items: [
						{ label: 'Assignments', icon: 'pi pi-fw pi-id-card', to: '/assignments' },
					]
				},
            ],
        }
    },
    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },
    methods: {
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }

            this.menuClick = false;
        },
        onMenuToggle() {
            this.menuClick = true;

            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
					if(this.mobileMenuActive === true) {
						this.overlayMenuActive = true;
					}

                    this.overlayMenuActive = !this.overlayMenuActive;
					this.mobileMenuActive = false;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }

            event.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
		onLayoutChange(layoutMode) {
			this.layoutMode = layoutMode;
		},
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth >= 992;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }

            return true;
        }
    },
    computed: {
		currentUser() {
            return this.$store.state.auth.user;
        },
		currentRole() {
			return this.$store.state.auth.role;
		},
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
				'p-input-filled': this.$primevue.config.inputStyle === 'filled',
				'p-ripple-disabled': this.$primevue.config.ripple === false,
                'layout-theme-light': this.$appState.theme.startsWith('saga')
            }];
        },
        logo() {
            return (this.$appState.darkTheme) ? "images/logo-white.svg" : "images/logo.svg";
        }
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppMenu': AppMenu,
        'AppFooter': AppFooter,
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
