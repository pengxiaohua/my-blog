import React, {FC} from "react"
import { Link } from "react-router-dom"

import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const footer: FC<Props> = (props) => {
  return (
    <div className="footer">
        <div className="footer__years">
          {`2022-${new Date().getFullYear()}`}
          <Link to="/back-stage" style={{marginLeft: 10, fontSize: 14}}>back-stage</Link>
        </div>
        <div className="footer__domain-name">www.xiaohua.run</div>
    </div>
  )
}

footer.defaultProps = defaultProps

export default footer
