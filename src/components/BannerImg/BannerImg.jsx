import bannerImg from '../../assets/banner.jpg'

const BannerImg = () => {
    return (
        <div className='flex justify-center border-2 p-6 rounded-lg'>
            <img className='w-[1200px] h-[500px] rounded-xl shadow-lg' src={bannerImg} alt="" />
        </div>
    );
};

export default BannerImg;