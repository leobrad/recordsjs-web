import React from 'react';
import style from './index.module.css';

class Introduce extends React.Component {
  render() {
    return (
      <ul>
        <li>
          insert(cnt) is encapsulation for database insert function.Parameter
          cnt can be adapter as a data object array or single data object.
        </li>
        <li>
          deleteExchange(id, total) is additional database insert function.
          Traditional database delete a record,deleted record space still exist,
          and this record database index space still occupy.That is mean,within
          current table use time increase,current table will generate more and
          more deleted record but still occupy disk space.Parameter id is
          mapping deleted record id.Parameter total is current table record
          total count.Cross call this function,records.js will exchange
          deleted record and last record store location.And delete specify
          record which is exchanged to last record location.In this way,user can
          manual solve above disk space occupy problem.But need careful use this
          function will change two records location and id.That is reason that
          traditional database don't provider this function.Whether or use this
          function,you need base you special problem.
        </li>
      </ul>
    );
  }
}

export default Introduce;
