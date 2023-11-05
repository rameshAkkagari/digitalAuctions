import classes from '../Components/Ul/MainHeaderContent/Profile.module.css'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const Profileshimmer= ()=>{
    return (
        <div className={classes.profilbackdrop}>
            <SkeletonTheme>
            <section className={classes.userinfo}>
                <h1><Skeleton/></h1>
                <Skeleton className={classes.userimage} />
                <h3><Skeleton/></h3>
                <h3><Skeleton/></h3>
                <h2><Skeleton/></h2>
                <button><Skeleton/></button>
            </section>
            </SkeletonTheme>
        </div>
    )
}

