import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import styles from "../../styles/productGrid.module.css";
import Link from "next/link";

const fetcher = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	if (res.status !== 200) {
		throw new Error(data.message);
	}
	return data;
};

export default function Bracelet() {
	const { query } = useRouter();
	const { data, error } = useSWR(
		() => query.id && `/api/bracelets/${query.id}`,
		fetcher
	);

	if (error) return <div>{error.message}</div>;
	if (!data) return <div>Retrieving bracelets data...</div>;

	return (
		<>
			<div className={styles.container}>
				<div className={styles.mainImage}>
					<Image
						src={"/img/jewelsy_logo.png"}
						width={180}
						height={180}
						alt="Janusz Jewelsy Collections"
						title="Janusz Jewelsy Collections"
					/>
				</div>
				<div className={styles.detailsBox}>
					<h1 className={styles.h1}>Product Details</h1>
					<p className={styles.textCentered}>
						<b>Description</b>: Unique selection of expertly crafted, pure gold
						and silver,
						<br />
						with or without diamonds, pearls, emeralds, rubies, gemstones, other
						<br />
						<b>Status</b>: In Stock, Limited
						<br />
						<b>Availability</b>: In Store Only
						<br />
						<b>Price</b>: Canadian Dollars
						<br />
						<Link href={"/bracelets"}>
							<a title="Go Back">
								<span className={styles.arrowBack}>
									&#129120;&nbsp;Go Back&nbsp;&#9472;
								</span>
							</a>
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
