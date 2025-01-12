import m from 'mithril'
import typescriptLogo from '../img/typescript.svg'

export default function Layout(): m.Component {
	let count = 0
	return {
		view: () => m('div',
			m('a', {href: 'https://vite.dev', target: '_blank'},
				m('img.logo', {src: '/img/vite.svg', alt: 'Vite logo'})
			),
			m('a', {href: 'https://www.typescriptlang.org/', target: '_blank'},
				m('img.logo.vanilla', {src: typescriptLogo, alt: 'TypeScript logo'})
			),
			m('h1', 'Vite + TypeScript'),
			m('div.card',
				m('button',
					{
						type: 'button',
						onclick: () => {count += 1}
					},
					'Count: ' + count
				)
			),
			m('p.read-the-docs',
				'Click on the Vite and TypeScript logos to learn more'
			)
		)
	}
}
