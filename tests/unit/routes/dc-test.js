import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('route:dc', 'Unit | Route | dc', {
  // Specify the other units that are required for this test.
  needs: ['service:workflow', 'service:dc', 'service:nodes'],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
