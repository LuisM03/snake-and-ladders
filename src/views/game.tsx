import Dados from "../components/dados/dados";
import Score from "../components/score/score";
import Player from "../components/players/player";
import Snake from "../assets/snake_thumbnail.png"
// import Snake from "../assets/klipartz.com.png"
import Leadder1 from "../assets/Recurso 1.svg"
import Leadder2 from "../assets/Recurso 2.svg"
import Leadder3 from "../assets/Recurso 3.svg"
import Start from "../assets/clima.png"

import { useEffect, useState } from "react";
import axios from "axios";

export default function Game() {

  const [data, setData] = useState([])
 
  useEffect(()=>{
    const getQuestions = async () => {
      try{
        const responses = await axios.get('https://service-questions.onrender.com/questions')
        setData(responses.data)
      }catch(error){
        console.log(error)
      }
    }

    getQuestions()
  },  [])

  return (
    <div className="">
      <div className="min-h-screen my-auto">
      <main className="flex flex-col items-center max-w-screen-md  my-5 mx-auto">
        <div id='contenedor' className="w-full border p-2 rounded mt-2 grid grid-cols-10 bg-white relative sm:w-full">
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>100</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>99</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>98</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>97</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">96</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>95</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>94</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>93</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>92</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>91</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>81</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>82</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>83</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">84</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>85</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>86</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">87</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>88</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>89</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>90</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative'>
            80
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>79</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">78</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>77</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>
            76
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative'>
            <img src={Leadder3} alt="" className="absolute w-6 bottom-4 sm:w-10 sm:bottom-10" />
            <p className="absolute top-0 left-1">75</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>74</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>73</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">72</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>71</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>61</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">62</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>63</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>64</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>65</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>66</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">67</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>68</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative'>
            <p className="absolute top-0 left-1">69</p>
            <img src={Leadder2} alt="" className="absolute w-6 sm:w-10 bottom-0 left-6 sm:bottom-4 sm:left-14 rotate-[24deg]" />
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>70</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>60</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>59</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">58</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>57</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>56</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">55</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>54</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">53</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>52</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>51</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>41</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>42</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">43</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>44</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>45</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>46</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>47</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">48</p>
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>49</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>50</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>40</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10 bottom-60" />
            <p className="absolute top-0 left-1">39</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>38</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>37</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>36</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <img src={Start} alt="" className="w-6 sm:w-10" />
            <p className="absolute top-0 left-1">35</p>
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>34</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>33</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>32</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>31</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>21</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>22</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>23</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">24</p>
            <img src={Start} alt="" className="w-6 sm:w-10" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative'>
            <img src={Leadder3} alt="" className="absolute w-6 sm:w-10 bottom-4 sm:bottom-8 left-2 sm:left-4" />
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>26</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>27</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">28</p>
            <img src={Start} alt="" className="w-6 sm:w-10" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>29</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>30</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>20</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>19</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>18</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>17</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">16</p>
            <img src={Start} alt="" className="w-6 sm:w-10" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>15</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>14</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>13</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">12</p>
            <img src={Start} alt="" className="w-6 sm:w-10" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] pl-1 text-white text-[20px]'>11</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px] relative'>
            <p className="absolute pl-1 text-white text-[20px]">01</p>
            <Player />
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>
            02
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">03</p>
            <img src={Start} alt="" className="w-6 sm:w-10" />
          </div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px] relative'>
            <p className="absolute top-0 left-1">04</p>
            <img src={Leadder1} alt="" className="absolute w-6 sm:w-10 bottom-1 sm:bottom-2 -left-10 sm:-left-14 -rotate-[20deg] sm:-rotate-[24deg]" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>05</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px] relative flex items-center justify-center'>
            <p className="absolute top-0 left-1">06</p>
            <img src={Start} alt="" className="w-6 md:w-10" />
          </div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>07</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>08</div>
          <div className='bg-blue-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px]'>09</div>
          <div className='bg-red-500 w-full h-[40px] sm:h-[70px]  pl-1 text-white text-[20px] relative'>
            <img src={Leadder2} alt="" className="absolute w-5 sm:w-10 bottom-2 right-5 sm:right-14 -rotate-[24deg]" />
          </div>
          <img src={Snake} alt="" className="absolute w-24 top-4 left-2 -retate-[24deg] sm:w-28 sm:top-3 md:w-48 md:top-4 md:left-2" />
          <img src={Snake} alt="" className="absolute w-20 bottom-28 left-2 sm:w-20 md:w-40 md:bottom-40 -rotate-90" />
          <img src={Snake} alt="" className="absolute bottom-36 w-20 sm:w-40 md:bottom-60 right-0 -rotate-[70deg]" />
          <img src={Snake} alt="" className="absolute w-28 right-32 top-28  md:w-60 md:top-44 md:left-64 right-0 -rotate-[70deg]" />
          <img src={Snake} alt="" className="absolute w-36 bottom-8 right-14 md:w-[300px] md:bottom-10 md:right-20 -rotate-[60deg]" />
          
        </div>
        </main>
      </div>
      <Score />
      <Dados questions={data} />
    </div>
  );
}