import titleArt from 'bundle-text:../assets/title-art.txt';
import version from 'bundle-text:../assets/version.txt';

console.log(titleArt);

export function App() {
	return <>
		<pre>{titleArt}</pre>
		<pre>Version {version}</pre>
	</>;
}