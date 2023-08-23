import React from 'react';
import style from './index.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          Records.js is database cache library.Why need do this?Database store
          data in the disk.Read and write speed is lower than memory.Records.js
          use memory cache data which user already use.When need same data in
          the next time.Records.js will get it from memory with very high speed.
          Overall,use records.js can improve read and write speed of database.
        </div>
        <div>
          Records.js use encapsulation api replace traditional sql sentences.
          Traditional sql sentences flooded uppercase and lowercase, string
          template replace and complex pattern match.Sql sentences is hard to
          remember and include too much detail.Use records.js can let user focus
          on bussiness logic without care about sql sentences.
        </div>
        <div>
          Traditional database is charge store user data in disk reasonable.As
          for memory cache part is not required.That is mean separate two
          different function module can make more lower coupling.User can
          according concrete request choice use records.js or not.Choose
          records.js make database use more efficiently.Without records.js can
          save memory and disk space.
        </div>
        <div>
          Database is be design as a client/server program.That is to say when
          use database need cross sql sentences operate database.Each above
          mentioned step will cause communication cost.Records.js cross calculate
          reduce sql sentences use.In this way will reeduce progress
          communication as possible.
        </div>
        <div>
          Records.js manage database use meticulously and have complex mechanism.
          Here look like still have other very simple way,cache all datas in
          database.This plan will make each time start database with very long
          time.Because when database start need read all data to cache.This
          operate will cost huge time cost.
        </div>
      </div>
    );
  }
}

export default Home;
