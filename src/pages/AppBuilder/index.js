import React, { lazy, Suspense } from 'react';
import Loading from '../../components/shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./AppBuilder'));

function AppBuilder() {
    return (
        <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
    );
}

export default AppBuilder;