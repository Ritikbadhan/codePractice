import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

function InfiniteScroll() {
    const listRef = useRef(null);
    const listScrollRef = useRef(null);

    const [listData, setListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const callAPI = async (page) => {
        setIsLoading(true);
        try {

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
            const jsonRes = await res.json();
            const currentScrollTop = listScrollRef.current || 0;
            setIsLoading(false);
            setListData((prev) => [...prev, ...jsonRes])
            requestAnimationFrame(() => {
                if (listRef.current) {
                    listRef.current.scrollTop = currentScrollTop;
                }
            })
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        callAPI(1);
    }, [])

    const handleScroll = () => {
        let list = listRef.current;
        if (!list || isLoading) {
            return
        }

        const isBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 10;
        listScrollRef.current = list.scrollTop || 0
        console.log(isBottom);
        if (isBottom) {
            const nextPage = pageNumber + 1;
            setPageNumber(nextPage)
            callAPI(nextPage)

        }


    }


    return (
        <>
            <div>InfiniteScroll</div>
            <div>
                <List sx={{ height: 300, overflow: 'auto' }} ref={listRef} onScroll={handleScroll}>
                    {isLoading ? <HourglassTopIcon /> : (
                        listData?.map((e) => (
                            <ListItem key={e.id}>
                                <Typography>
                                    {e.id}. {e.title}
                                </Typography>
                            </ListItem>
                        ))
                    )}
                </List>
            </div>
        </>
    )
}

export default InfiniteScroll