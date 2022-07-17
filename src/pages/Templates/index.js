import React, { lazy, Suspense } from 'react';
import Loading from '../../components/shared/Loading/Loading';
const LazyLoaded = lazy(() => import('./Templates'));

function Templates() {
    return (
        <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
    );
}

export default Templates;