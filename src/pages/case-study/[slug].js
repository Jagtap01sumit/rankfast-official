import React, { useEffect } from 'react';
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getCaseStudies, getCaseStudy } from '@/redux/action/caseStudyAction';
import { Content, ContinueReading, FeatureImage, Meta, SingleCaseStudyBanner } from '@/sections';

const SingleCaseStudy = () => {
    const { caseStudy, caseStudies } = useSelector(state => state.caseStudyReducer);
    const router = useRouter();
    const dispatch = useDispatch();

    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            dispatch(getCaseStudy(slug));
        }
    }, [slug]);

    useEffect(() => {
        dispatch(getCaseStudies())
    }, [])

    return (
        <>
            <Box className="singleCase">
                <SingleCaseStudyBanner title={caseStudy?.title} />
                <FeatureImage
                    featuredImage={caseStudy?.bannerImage?.asset?._ref
                        ? `https://cdn.sanity.io/images/cyz6zl3a/production/${caseStudy?.bannerImage?.asset?._ref.split("-")[1]}-${caseStudy?.bannerImage?.asset?._ref.split("-")[2]}.${caseStudy?.bannerImage?.asset?._ref.split("-")[3]}`
                        : ''
                    }
                />
                <Meta />
                <Content caseStudy={caseStudy} />
                <ContinueReading caseStudies={caseStudies} slug={slug} />
            </Box>
        </>
    );
};

export default SingleCaseStudy;
