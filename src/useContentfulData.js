import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
})

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const resp = await client.getEntries({ content_type: 'projects-api' });

            const result = resp.items.map((item) => {
                const { title, url } = item.fields;
                const id = item.sys.id;
                const img = item.fields.image?.fields?.file?.url;

                return { id, title, url, img };
            })
            setProjects(result);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getProjects();
    }, []);
    return { isLoading, projects };
}