import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes();

    if (!episodes) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            episodes,
        }
    }
}

type Props = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = ({episodes}: Props) => {

    const episodesList = episodes.results.map((episode: EpisodeType) => {
       return <div key={episode.id}>{episode.name}</div>
    })

    return (
        <PageWrapper>
            {episodesList}
        </PageWrapper>
    )
}
Episodes.getLayout = getLayout;
export default Episodes