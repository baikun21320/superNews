<template>
  <div>
      <scroll>
        <ul>
          <li>ll1</li>
          <li>ll2</li>
          <li>ll3</li>
          <li>ll4</li>
          <li>ll5</li>
          <li>ll6</li>
          <li>ll7</li>
          <li>ll8</li>
          <li>ll9</li>
          <li>ll10</li>
          <li>ll11</li>
          <li>ll12</li>
          <li>ll13</li>
          <li>ll14</li>
          <li>ll15</li>
          <li>ll16</li>
          <li>ll17</li>
          <li>ll18</li>
          <li>ll19</li>
          <li>ll20</li>
          <li>ll21</li>
          <li>ll22</li>
          <li>ll23</li>
          <li>ll24</li>
          <li>ll25</li>
          <li>ll26</li>
          <li>ll27</li>
          <li>ll28</li>
          <li>ll29</li>
          <li>ll30</li>
          <li>ll31</li>
          <li>ll32</li>
          <li>ll33</li>
          <li>ll34</li>
          <li>ll35</li>
          <li>ll36</li>
          <li>ll37</li>
          <li>ll38</li>
          <li>ll39</li>
          <li>ll40</li>
          <li>ll41</li>
          <li>ll42</li>
          <li>ll43</li>
          <li>ll44</li>
          <li>ll45</li>
          <li>ll46</li>
          <li>ll47</li>
          <li>ll48</li>
          <li>ll49</li>
          <li>ll50</li>
        </ul>
        <slot></slot>
      </scroll>
  </div>
</template>

<script>
 import Scroll from "@/components/common/scroll/Scroll";
// import BScroll from 'better-scroll'
export default {
  name: "Category",
  components: {
    // BScroll
     Scroll
  },
}
</script>

<style scoped>
  .wrapper {
    height: 300px;
  }
</style>
