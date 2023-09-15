import React from 'react';
import style from './index.module.css';

class Introduce extends React.Component {
  render() {
    return (
      <ul>
        <li>
          select(section, filters, arrange) is correspond to database select
          function.Records.js is database cache library.Each time query database
          records.js will calculate base on call situation,and update inner
          index.So that,records.js can know this time should use sql senstence
          query disk database or just get data from cache.Function select is
          database cache specify implement.When records.js do cache job,cache
          data will include current don't need data.In this situation,user can
          according to situation choose performance first ignore added column or
          network first set arrange to true let records.js optimize result to
          minize data set.Parameter section is section([from, to]) array which
          specify select records arrange.Parameter filters([column1, column2])
          columns name array which specify need selected specify columns.
          Parameter arrange is boolean which specify whether or not optimize
          cache data to minize data set.
        </li>
        <li>
          insert(cnt) is correspond to database insert function.Parameter cnt
          can be adapter as a data object array or single data object.Insert
          data object mapping specify table record.
        </li>
        <li>
          deleteExchange(id, total) is additional database delete function.
          Traditional database delete a record,deleted record space still exist,
          and this record table index space still occupy.That is mean,within
          use time increase,current table will generate more and more deleted
          record but still occupy disk space.Cross call this function,records.js
          will exchange deleted record and current table last record,and delete
          specify record which is exchanged to last record location.In this way,
          user can manual solve above disk space occupy problem.But need careful
          use this function will change two records location and id.That is
          reason that traditional database don't provider this function.
          Whether or not use this function,you need base you special situation.
          Parameter id is mapping deleted record id.Parameter total is current
          table record total count.
        </li>
        <li>
          delete(id) is encapsulation for database delete function.Parameter id
          is mapping deleted record id.
        </li>
        <li>
          update(obj) is correspond to database update function.Parameter obj
          is object data.Update data object is mapping specify table record.Update
          data object must specify update record id.
        </li>
        <li>
          emptyCache() is additional records.js function.When user manual modify
          database data bypass records.js function.In before time,user must
          reboot entire records.js related application.Add to this function,
          user can only empty records.js cache without reboot entire records.js
          related application.
        </li>
      </ul>
    );
  }
}

export default Introduce;
