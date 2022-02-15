import useSWR from "swr";
import Bracelet from "../../components/Bracelets";
import styles from "../../styles/productGrid.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
	const { data, error } = useSWR("/api/bracelets", fetcher);

	if (error) return <div>Bracelets data failed to load</div>;
	if (!data) return <div>Loading bracelets data...</div>;

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.collectionsH1}>Jewelsy Collections</h1>
				{data.map((b, i) => (
					<Bracelet key={i} bracelet={b} />
				))}
			</div>
		</>
	);
}
