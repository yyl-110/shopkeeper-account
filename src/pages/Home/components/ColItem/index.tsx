import React, { useEffect, useState } from 'react';
import { connect, Dispatch, Loading, history } from 'umi';
import styles from './index.less';
import { Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import ArticleStep from '../ArticleStep/index';

interface IProps {}
const ColItem: React.FC<IProps> = props => {
  return (
    <div className={styles.colWrap}>
      <Row style={{ width: '100%' }}>
        <Col xs={24} sm={8}>
          <div className={styles.colItem}>
            <div className={styles.itemTitle}>
              <span className={styles.title}>
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.001.314c-1.8 0-3.12 1.696-2.677 3.441l.48 1.89a2.57 2.57 0 001.904 1.87c.193.045.393.045.586 0a2.57 2.57 0 001.905-1.87l.479-1.89A2.762 2.762 0 007.001.315zm-.502 7.56c.324-.047.654-.047.978 0l.964.139c1.402.201 2.802.702 4.204 1.496a1.444 1.444 0 01.732 1.254v1.635a.783.783 0 01-.635.77c-1.914.381-3.827.571-5.741.571-1.914 0-3.827-.19-5.74-.57a.788.788 0 01-.636-.771v-1.635a1.438 1.438 0 01.732-1.254C2.76 8.715 4.16 8.214 5.561 8.01l.938-.137z"
                    fill="url(#fans-icon_svg__paint0_linear)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="fans-icon_svg__paint0_linear"
                      x1="-2.253"
                      y1="7.383"
                      x2="8.04"
                      y2="16.236"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF8585"></stop>
                      <stop offset="1" stop-color="#FF5E5E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className={styles.text}>粉丝数</span>
                <svg
                  className="byte-icon question-circle-icon byte-icon byte-icon-mp-circle"
                  viewBox="0 0 1024 1024"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M512 42.688a469.312 469.312 0 110 938.624 469.312 469.312 0 010-938.624zM512 128a384 384 0 100 768 384 384 0 000-768zm21.312 554.688c11.776 0 21.376 9.536 21.376 21.312v42.688c0 11.776-9.6 21.312-21.376 21.312h-42.624a21.312 21.312 0 01-21.376-21.312V704c0-11.776 9.6-21.312 21.376-21.312h42.624zM505.92 256c50.752 0 92.864 12.288 126.4 36.864 33.6 24.576 50.368 60.928 50.368 109.184 0 29.568-7.296 54.4-21.888 74.688-7.296 10.56-20.416 23.552-39.232 39.104l-33.856 26.752c-12.992 10.24-21.632 22.144-25.92 35.84a115.456 115.456 0 00-3.008 20.736 21.312 21.312 0 01-21.248 19.52h-47.808a21.312 21.312 0 01-21.312-21.376l.064-1.92c2.752-29.696 5.76-48.512 8.832-56.384 5.824-14.72 20.864-31.552 45.12-50.688l24.576-19.456c8.064-6.144 49.728-35.456 49.728-61.44 0-25.92-4.48-35.456-17.6-49.664-12.992-14.272-42.368-18.88-68.8-18.88-26.048 0-48.32 6.912-59.2 24.448a123.328 123.328 0 00-12.16 25.6l-2.112 8.128-.96 4.992a21.312 21.312 0 01-20.992 17.728h-50.24a21.312 21.312 0 01-21.376-21.376l.192-2.368 1.088-8.512.576-3.392c8.32-46.336 29.376-80.384 63.168-102.208 26.496-17.28 59.008-25.92 97.6-25.92z"></path>
                </svg>
              </span>
              <div className={styles.primary}>
                <a href="/profile_v4/analysis/fans/overview">7,270</a>
              </div>
              <div className={styles.secondary}>
                <p className="second-title no-change second-title">
                  昨日 4<ArrowUpOutlined style={{ color: '#ff5e5e', fontWeight: 'bold' }} />
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={8} style={{ width: '100%' }}>
          <div className={styles.colItem}>
            <div className={styles.itemTitle}>
              <span className={styles.title}>
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.194 3.433C10.085 2.218 6.997.045 6.997.045S3.99 2.138 2.751 3.378C1.51 4.618.937 6.084.937 7.708c0 1.623.652 3.18 1.814 4.329a5.898 5.898 0 001.94 1.323 5.955 5.955 0 004.621 0 5.898 5.898 0 001.941-1.323 6.087 6.087 0 001.812-4.33c-.001-1.624-.764-3.06-1.871-4.274z"
                    fill="url(#read-count-icon_svg__paint0_linear)"
                  ></path>
                  <path
                    d="M7.371 7.004l.247-1.974c.035-.283-.323-.434-.501-.211L5.265 7.134a.377.377 0 00.294.612h1.07l-.246 1.975c-.036.283.323.434.5.211l1.853-2.315a.377.377 0 00-.294-.613h-1.07z"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      id="read-count-icon_svg__paint0_linear"
                      x1="-1.35"
                      y1="8.304"
                      x2="8.723"
                      y2="15.503"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#599AFF"></stop>
                      <stop offset="1" stop-color="#3D89FF"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className={styles.text}>总阅读(播放)量</span>
              </span>
            </div>
            <div className={styles.primary}>
              <a href="/profile_v4/analysis/works-overall/all">0</a>
            </div>
            <div className={styles.secondary}>
              <p className="second-title up no-change">昨日无变化</p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className={styles.colItem}>
            <div className={styles.itemTitle}>
              <span className={styles.title}>
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7.001" r="6.825" fill="url(#benefit-icon_svg__paint0_linear)"></circle>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.243 3.98a.391.391 0 01.553 0L6.997 5.18 8.2 3.98a.391.391 0 11.553.553L7.47 5.814h1.64a.391.391 0 110 .782H7.39v1.017h1.72a.391.391 0 010 .782H7.39v1.642a.39.39 0 01-.781 0V8.395h-1.72a.391.391 0 010-.782h1.72V6.596h-1.72a.391.391 0 010-.782h1.636L5.243 4.533a.391.391 0 010-.553z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M5.796 3.98l.062-.062-.062.062zm-.553 0l-.062-.062.062.062zM6.997 5.18l-.061.062.061.062.062-.062-.062-.062zM8.2 3.98l-.062-.062.062.062zm.553 0l-.062.062.062-.062zm0 .553L8.69 4.47l.062.062zM7.47 5.814l-.062-.062-.15.15h.212v-.088zm-.08.782V6.51h-.087v.087h.088zm0 1.017h-.087v.088h.088v-.088zm0 .782v-.088h-.087v.088h.088zm-.781 0h.087v-.088H6.61v.088zm0-.782v.088h.087v-.088H6.61zm0-1.017h.087V6.51H6.61v.087zm-.084-.782v.088h.211l-.15-.15-.061.062zM5.243 4.533l-.062.062.062-.062zm.615-.615a.478.478 0 00-.677 0l.124.124a.303.303 0 01.43 0l.123-.124zm1.201 1.201L5.858 3.918l-.124.124 1.202 1.201.123-.124zm1.078-1.201L6.935 5.119l.124.124 1.202-1.201-.124-.124zm.677 0a.478.478 0 00-.677 0l.124.124a.303.303 0 01.429 0l.124-.124zm0 .677a.478.478 0 000-.677l-.124.124a.303.303 0 010 .429l.124.124zM7.532 5.876l1.282-1.281-.124-.124-1.282 1.281.124.124zm1.579-.15H7.47v.176h1.64v-.175zm.478.48a.478.478 0 00-.478-.48v.176c.167 0 .303.136.303.303h.175zm-.478.478a.478.478 0 00.478-.479h-.175a.303.303 0 01-.303.304v.175zm-1.72 0h1.72v-.175H7.39v.175zm-.088-.088v1.017h.175V6.596h-.175zm1.808.93H7.39V7.7h1.72v-.175zm.478.478a.478.478 0 00-.478-.478V7.7c.167 0 .303.135.303.303h.175zm-.478.478a.478.478 0 00.478-.478h-.175a.303.303 0 01-.303.303v.175zm-1.72 0h1.72v-.175H7.39v.175zm-.088-.087v1.642h.175V8.395h-.175zm0 1.642A.303.303 0 017 10.34v.175a.478.478 0 00.478-.478h-.175zM7 10.34a.303.303 0 01-.304-.303h-.175c0 .264.215.478.479.478v-.175zm-.304-.303V8.395h-.175v1.642h.175zM4.89 8.482h1.72v-.175h-1.72v.175zm-.479-.478c0 .264.214.478.479.478v-.175a.303.303 0 01-.304-.303H4.41zm.479-.478a.478.478 0 00-.479.478h.175c0-.168.136-.303.304-.303v-.175zm1.72 0h-1.72V7.7h1.72v-.175zm.087.087V6.596h-.175v1.017h.175zm-1.807-.93h1.72V6.51h-1.72v.175zm-.479-.478c0 .265.214.479.479.479v-.175a.303.303 0 01-.304-.304H4.41zm.479-.478a.478.478 0 00-.479.478h.175c0-.167.136-.303.304-.303v-.175zm1.636 0H4.889v.175h1.636v-.175zM5.18 4.595l1.282 1.281.124-.124-1.282-1.281-.124.124zm0-.677a.478.478 0 000 .677l.124-.124a.303.303 0 010-.43l-.124-.123z"
                    fill="#fff"
                  ></path>
                  <defs>
                    <linearGradient
                      id="benefit-icon_svg__paint0_linear"
                      x1="-2"
                      y1="8.593"
                      x2="8.121"
                      y2="16.678"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFD05E"></stop>
                      <stop offset="1" stop-color="#FFC740"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className={styles.text}>累计收益</span>
                <div className="visible-btn" style={{ height: '14px' }}>
                  <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.992 10.79c1.888 0 3.637-1.2 5.259-3.798-1.58-2.589-3.325-3.784-5.26-3.784-1.933 0-3.672 1.195-5.24 3.784C3.36 9.59 5.102 10.79 6.99 10.79zM6.99 2.042c2.345 0 4.364 1.434 6.057 4.302l.103.177.109.194a.583.583 0 01-.003.571l-.117.202c-1.754 2.98-3.804 4.47-6.15 4.47-2.3 0-4.31-1.432-6.03-4.299l-.083-.14a14.335 14.335 0 01-.104-.179l-.031-.055a.583.583 0 01-.003-.568l.098-.177.053-.093c1.693-2.937 3.727-4.405 6.1-4.405zM7 4.666a2.333 2.333 0 100 4.667 2.333 2.333 0 000-4.667zm0 1.167a1.167 1.167 0 110 2.333 1.167 1.167 0 010-2.333z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </span>
            </div>
            <div className={styles.primary}>
              <a href="/profile_v4/analysis/income-overview">
                0<span className={styles.unit}>元</span>
              </a>
            </div>
            <div className={styles.secondary}>
              <p className="second-title no-change">昨日无变化</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* 文章 */}
      <ArticleStep />
    </div>
  );
};

export default ColItem;
