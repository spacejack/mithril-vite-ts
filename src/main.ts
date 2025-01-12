import m from 'mithril'
import './style.css'
import Layout from './UI/Layout'

window.addEventListener('DOMContentLoaded', () => {
	m.mount(document.querySelector('#app') as HTMLElement, Layout)
})
