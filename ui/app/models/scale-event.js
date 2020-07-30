import { computed } from '@ember/object';
import Fragment from 'ember-data-model-fragments/fragment';
import attr from 'ember-data/attr';
import { fragmentOwner } from 'ember-data-model-fragments/attributes';

export default class ScaleEvent extends Fragment {
  @fragmentOwner() taskGroupScale;

  @attr('number') count;
  @attr('number') previousCount;
  @attr('boolean') error;
  @attr('string') evalId;

  @computed('count', function() {
    return this.count != null;
  })
  hasCount;

  @computed('count', 'previousCount', function() {
    return this.count > this.previousCount;
  })
  increased;

  @attr('date') time;
  @attr('number') timeNanos;

  @attr('string') message;
  @attr() meta;

  @computed('meta', function() {
    return Object.keys(this.meta).length > 0;
  })
  hasMeta;
}
