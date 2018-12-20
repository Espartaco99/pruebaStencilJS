import { Component } from "@stencil/core";


@Component({
    tag: 'holy-grid',
    styleUrl: 'holy-grid.css',
})
export class HolyGridComponent {
    
    render(){
        return (
            <main>
                <header><slot name="header"/></header>
                <nav><slot name="nav"/></nav>
                <section><slot name="section"/></section>
                <aside><slot name="aside"/></aside>
                <footer><slot name="footer"/></footer>
            </main>
        );
    }
}