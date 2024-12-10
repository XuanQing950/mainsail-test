import Vue from 'vue'
import Component from 'vue-class-component'
import { CommandHelp } from '@/store/printer/types'
import { GuiConsoleStateFilter } from '@/store/gui/console/types'

@Component
export default class ConsoleMixin extends Vue {
    get helplist(): CommandHelp[] {
        return this.$store.state.printer.helplist ?? []
    }

    get consoleDirection() {
        return this.$store.state.gui.console.direction ?? 'table'
    }

    get hideWaitTemperatures(): boolean {
        return this.$store.state.gui.console.hideWaitTemperatures
    }

    set hideWaitTemperatures(newVal) {
        this.$store.dispatch('gui/saveSetting', { name: 'console.hideWaitTemperatures', value: newVal })
    }

    get hideTlCommands(): boolean {
        return this.$store.state.gui.console.hideTlCommands
    }

    set hideTlCommands(newVal) {
        this.$store.dispatch('gui/saveSetting', { name: 'console.hideTlCommands', value: newVal })
    }

    get customFilters() {
        return this.$store.state.gui.console.consolefilters ?? {}
    }

    get autoscroll(): boolean {
        return this.$store.state.gui.console.autoscroll ?? true
    }

    set autoscroll(newVal) {
        this.$store.dispatch('gui/saveSetting', { name: 'console.autoscroll', value: newVal })
    }

    get rawOutput(): boolean {
        return this.$store.state.gui.console.rawOutput ?? false
    }

    set rawOutput(newVal) {
        this.$store.dispatch('gui/saveSetting', { name: 'console.rawOutput', value: newVal })
    }

    get lastCommands(): string[] {
        return this.$store.state.gui.gcodehistory.entries ?? []
    }

    toggleFilter(id: string | number, filter: GuiConsoleStateFilter): void {
        this.$store.dispatch('gui/console/filterUpdate', { id, values: filter })
    }

    clearConsole() {
        this.$store.dispatch('gui/console/clear')
    }
}