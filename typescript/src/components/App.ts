import Vue from 'vue';
import Component from 'vue-class-component';
import SingleItem from './SingleItem.vue';

@Component({ components: { SingleItem } })
export default class App extends Vue {
    items: string[] = [];
    newItem: string = '';

    addItem() {
        this.items.push(this.newItem);
        return false;
    }

    removeItem(item:string) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
