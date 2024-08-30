export function VideoCard(props: any) {
    return (
        <div className="">
            <img src={props.image} />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-2 ">
                    <img
                        className="rounded-full h-12 w-12"
                        src={props.avatar}
                    />
                </div>
                <div className="col-span-10 pl-2">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.auther}
                    </div>
                    <div className="col-span-11 text-gray-400">
                        {props.views} | {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    );
}
