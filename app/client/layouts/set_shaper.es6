import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import MenuTreePanel from '../containers/menu_tree_panel.es6';
import SetTable from '../containers/set_table.es6';
import SelectableSetTable from '../containers/selectable_set_table.es6';
import DroppableSelectedSet from '../containers/droppable_selected_set.es6';
import DraggableSelectedCollection from '../containers/draggable_selected_collection.es6';
import { Panel, Heading, Body, Footer } from '../components/panel.es6';
import SetForm from '../containers/add_set_form.es6';

const SetShaper = ({ set, entity, source, onToggle }) => {

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-12">
          <h1 className="page-header">Shape Sets</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Panel>
            <Heading title="Sets" />

            <Body style={{height: '280px', overflowY: 'scroll'}}>
              <SetTable />
            </Body>

            <Footer>
              <SetForm />
            </Footer>
          </Panel>
        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>

            <Panel key={`set-${set.id}`}>
              <Heading title={set.attributes.name} />

              <Body>
                <DroppableSelectedSet set={set} />
              </Body>

            </Panel>

          </ReactCSSTransitionGroup>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">

          <Panel>

            <Body style={{height: '320px', overflowY: 'scroll'}}>
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#collections" aria-controls="collections" role="tab" data-toggle="tab">Collections</a></li>
                <li role="presentation"><a href="#sets" aria-controls="sets" role="tab" data-toggle="tab">Sets</a></li>
              </ul>

              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="collections">
                  <MenuTreePanel
                    source={source}
                    onToggle={onToggle}
                    entities={['programs', 'collections']}
                  />
                </div>
                <div role="tabpanel" className="tab-pane" id="sets">
                  <SelectableSetTable />
                </div>
              </div>

            </Body>

          </Panel>

        </div>

        <div className="col-md-9">
          <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={500} transitionLeave={false}>
            <Panel key={`collection-${entity.id}`}>
              <Heading title={entity.attributes.name} />

              <Body>
                <DraggableSelectedCollection />
              </Body>

            </Panel>
          </ReactCSSTransitionGroup>
        </div>
      </div>

    </div>
  )
};

SetShaper.defaultProps = {
  set: { attributes: { name: ''}},
  entity: { attributes: { name: ''}}
}

export default SetShaper;