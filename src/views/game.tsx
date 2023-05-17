import Dados from "../components/dados/dados";
import Score from "../components/score/score";
import Player from "../components/players/player";
import Snake from "../assets/snake_thumbnail.png"
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
    <div className="min-h-screen my-auto">
      <main className="flex flex-col items-center justify-center max-w-screen-md mx-auto my-5">
        <Score />
        
        <div id='contenedor' className="w-full border p-2 rounded mt-2 grid grid-cols-10 bg-white relative">
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>100</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>99</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>98</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>97</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>96</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>95</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>94</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>93</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>92</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>91</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>81</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>82</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>83</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>84</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>85</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>86</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>87</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>88</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>89</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>90</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>80</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>79</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>78</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>77</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>76</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>75</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>74</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>73</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>72</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>71</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>61</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>62</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>63</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>64</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>65</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>66</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>67</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>68</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>69</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>70</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>60</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>59</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>58</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>57</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>56</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>55</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>54</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>53</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>52</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>51</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>41</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>42</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>43</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>44</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>45</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>46</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>47</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>48</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>49</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>50</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>40</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>39</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>38</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>37</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>36</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>35</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>34</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>33</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>32</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>31</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>21</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>22</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>23</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>24</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>25</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>26</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>27</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>28</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>29</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>30</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>20</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>19</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>18</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>17</div>
          <div className='bg-red-500 w-full h-[70px] pl-1 text-white text-[20px]'>16</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>15</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>14</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>13</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>12</div>
          <div className='bg-blue-500 w-full h-[70px] pl-1 text-white text-[20px]'>11</div>
          <div className='bg-blue-500 w-full h-[70px] relative'>
            <p className="absolute pl-1 text-white text-[20px]">01</p>
            <Player />
          </div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>02</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>03</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>04</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>05</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>06</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>07</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>08</div>
          <div className='bg-blue-500 w-full h-[70px]  pl-1 text-white text-[20px]'>09</div>
          <div className='bg-red-500 w-full h-[70px]  pl-1 text-white text-[20px]'>10</div>
          <img src={Snake} alt="" className="absolute w-60" />
          <img src={Snake} alt="" className="absolute w-40 bottom-40 -rotate-90" />
          <img src={Snake} alt="" className="absolute w-40 bottom-60 right-0 -rotate-[70deg]" />
          <img src={Snake} alt="" className="absolute w-60 top-40 left-60 right-0 -rotate-[70deg]" />
          <img src={Snake} alt="" className="absolute w-[300px] bottom-10 right-20 -rotate-[60deg]" />
          <img src={Leadder2} alt="" className="absolute w-10 bottom-5 right-14 -rotate-[24deg]" />
          <img src={Leadder1} alt="" className="absolute w-10 bottom-5 left-44 -rotate-[24deg]" />
          <img src={Leadder3} alt="" className="absolute w-10 bottom-44 left-[330px]" />
          <img src={Leadder2} alt="" className="absolute w-10 top-20 right-14 rotate-[24deg]" />
          <img src={Leadder3} alt="" className="absolute w-10 top-10 left-[400px]" />
        </div>
        <Dados questions={data} />
      </main>
    </div>
  );
}