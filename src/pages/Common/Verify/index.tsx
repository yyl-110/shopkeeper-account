import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import classnames from 'classnames';
import { Checkbox, Form, Input, Select, Upload, Button, Breadcrumb } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';
const { Option } = Select;
interface IProps {}
const Verify: React.FC<IProps> = props => {
  return (
    <div className={classnames(styles.verify, 'garrContainer')}>
      <Breadcrumb separator={<RightOutlined />} style={{ padding: '26px 0' }}>
        <Breadcrumb.Item>
          <a href="/home">主页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">港澳台及海外作者认证</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>基本信息</h2>
      <div className={styles.form}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          labelWrap
          labelAlign="right"
        >
          <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}>
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item label="国家&地区" name="city" rules={[{ required: true, message: '请选择国家&地区' }]}>
            <Select placeholder="请选择国家&地区" allowClear>
              <Option value="male">male</Option>
            </Select>
          </Form.Item>
          <Form.Item label="职业" name="work" rules={[{ required: true, message: '请选择职业' }]}>
            <Select placeholder="请选择职业" allowClear>
              <Option value="male">male</Option>
            </Select>
          </Form.Item>
          <Form.Item label="选择证件" name="name" rules={[{ required: true, message: '请选择证件类型' }]}>
            <Select placeholder="请选择证件类型" allowClear>
              <Option value="male">male</Option>
            </Select>
          </Form.Item>
          <Form.Item label="证件照号" name="number" rules={[{ required: true, message: '请输入证件照号' }]}>
            <Input placeholder="请输入证件照号" />
          </Form.Item>
          <Form.Item label="身份证明">
            <div className={styles.imgList} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined className="c1" style={{ fontSize: '25px' }} />
                  <div style={{ marginTop: 8, color: '#666' }}>手持证件正脸照</div>
                </div>
              </Upload>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined className="c1" style={{ fontSize: '25px' }} />
                  <div style={{ marginTop: 8, color: '#666' }}>手持证件正脸照</div>
                </div>
              </Upload>
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined className="c1" style={{ fontSize: '25px' }} />
                  <div style={{ marginTop: 8, color: '#666' }}>手持证件正脸照</div>
                </div>
              </Upload>
            </div>
            <span style={{ fontSize: '12px', color: '#999' }}>
              建议分辨率不低于1920*1080，大小不超过5M。
              <a href="#" style={{ color: '#1356bd' }}>
                示例
              </a>
            </span>
          </Form.Item>
          <div className={styles.title}>证明材料</div>
          <Form.Item
            label="其他自媒体或社交平台个人主页链接"
            name="link"
            rules={[{ required: true, message: '请输入链接' }]}
          >
            <Input />
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Checkbox>
              我已阅读并同意
              <a href="/" style={{ color: '#1356bd' }}>
                《实名认证服务协议》
              </a>
            </Checkbox>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button type="primary">提交</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Verify;
