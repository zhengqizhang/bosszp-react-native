import * as navigationActions from './navigation';
import * as loginActions from './login';
import * as modalActions from './modal';
import * as baseInfoActions from './baseInfo';
import * as jobWantActions from './jobWant';
import * as eduExpActions from './eduExp';
import * as workExpActions from './workExp';
import * as resumeActions from './resume';
import * as awardActions from './award';
import * as workActions from './work';
import * as skillActions from './skill';
import * as dateActions from './dateData';


module.exports = {
  ...navigationActions,
  ...loginActions,
  ...baseInfoActions,
  ...modalActions,
  ...jobWantActions,
  ...eduExpActions,
  ...resumeActions,
  ...workExpActions,
  ...awardActions,
  ...workActions,
  ...skillActions,
  ...dateActions
}
