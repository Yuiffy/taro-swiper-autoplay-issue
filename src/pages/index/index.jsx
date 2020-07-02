import React, { Component } from 'react'
import { View, Text, Swiper, SwiperItem, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowTab: 0
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    const { nowTab } = this.state;
    const tabs = [{ autoplay: true, label: '自动播' }, { autoplay: false, label: '不自动' }];
    return (
      <View className='index'>
        <Text>切换到不autoplay的tab，再切回来，就会也变成不autoplay</Text>
        <Button onClick={() => {
          this.setState({ nowTab: this.state.nowTab === 1 ? 0 : 1 });
        }}
        >切换Tab（当前：{nowTab}）</Button>
        {tabs.map((tab, idx) => {
          const { label, autoplay } = tab;
          return <View key={idx} className={`tab-item tab-item-active-${nowTab === idx}`}>
            <Swiper autoplay={autoplay} interval={1000}>
              <SwiperItem>{label}123</SwiperItem>
              <SwiperItem>{label}456</SwiperItem>
            </Swiper>
          </View>
        })}
      </View>
    )
  }
}
