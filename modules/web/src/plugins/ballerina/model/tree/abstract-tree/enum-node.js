/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import _ from 'lodash';
import Node from '../node';

class AbstractEnumNode extends Node {


    setEnumerators(newValue, silent, title) {
        const oldValue = this.enumerators;
        title = (_.isNil(title)) ? `Modify ${this.kind}` : title;
        this.enumerators = newValue;

        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'modify-node',
                title,
                data: {
                    attributeName: 'enumerators',
                    newValue,
                    oldValue,
                },
            });
        }
    }

    getEnumerators() {
        return this.enumerators;
    }


    addEnumerators(node, i = -1, silent) {
        node.parent = this;
        let index = i;
        if (i === -1) {
            this.enumerators.push(node);
            index = this.enumerators.length;
        } else {
            this.enumerators.splice(i, 0, node);
        }
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Add ${node.kind}`,
                data: {
                    node,
                    index,
                },
            });
        }
    }

    removeEnumerators(node, silent) {
        const index = this.getIndexOfEnumerators(node);
        this.removeEnumeratorsByIndex(index, silent);
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-removed',
                title: `Removed ${node.kind}`,
                data: {
                    node,
                    index,
                },
            });
        }
    }

    removeEnumeratorsByIndex(index, silent) {
        this.enumerators.splice(index, 1);
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-removed',
                title: `Removed ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    replaceEnumerators(oldChild, newChild, silent) {
        const index = this.getIndexOfEnumerators(oldChild);
        this.enumerators[index] = newChild;
        newChild.parent = this;
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Change ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    replaceEnumeratorsByIndex(index, newChild, silent) {
        this.enumerators[index] = newChild;
        newChild.parent = this;
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Change ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    getIndexOfEnumerators(child) {
        return _.findIndex(this.enumerators, ['id', child.id]);
    }

    filterEnumerators(predicateFunction) {
        return _.filter(this.enumerators, predicateFunction);
    }


    setName(newValue, silent, title) {
        const oldValue = this.name;
        title = (_.isNil(title)) ? `Modify ${this.kind}` : title;
        this.name = newValue;

        this.name.parent = this;

        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'modify-node',
                title,
                data: {
                    attributeName: 'name',
                    newValue,
                    oldValue,
                },
            });
        }
    }

    getName() {
        return this.name;
    }


    setAnnotationAttachments(newValue, silent, title) {
        const oldValue = this.annotationAttachments;
        title = (_.isNil(title)) ? `Modify ${this.kind}` : title;
        this.annotationAttachments = newValue;

        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'modify-node',
                title,
                data: {
                    attributeName: 'annotationAttachments',
                    newValue,
                    oldValue,
                },
            });
        }
    }

    getAnnotationAttachments() {
        return this.annotationAttachments;
    }


    addAnnotationAttachments(node, i = -1, silent) {
        node.parent = this;
        let index = i;
        if (i === -1) {
            this.annotationAttachments.push(node);
            index = this.annotationAttachments.length;
        } else {
            this.annotationAttachments.splice(i, 0, node);
        }
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Add ${node.kind}`,
                data: {
                    node,
                    index,
                },
            });
        }
    }

    removeAnnotationAttachments(node, silent) {
        const index = this.getIndexOfAnnotationAttachments(node);
        this.removeAnnotationAttachmentsByIndex(index, silent);
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-removed',
                title: `Removed ${node.kind}`,
                data: {
                    node,
                    index,
                },
            });
        }
    }

    removeAnnotationAttachmentsByIndex(index, silent) {
        this.annotationAttachments.splice(index, 1);
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-removed',
                title: `Removed ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    replaceAnnotationAttachments(oldChild, newChild, silent) {
        const index = this.getIndexOfAnnotationAttachments(oldChild);
        this.annotationAttachments[index] = newChild;
        newChild.parent = this;
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Change ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    replaceAnnotationAttachmentsByIndex(index, newChild, silent) {
        this.annotationAttachments[index] = newChild;
        newChild.parent = this;
        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'child-added',
                title: `Change ${this.kind}`,
                data: {
                    node: this,
                    index,
                },
            });
        }
    }

    getIndexOfAnnotationAttachments(child) {
        return _.findIndex(this.annotationAttachments, ['id', child.id]);
    }

    filterAnnotationAttachments(predicateFunction) {
        return _.filter(this.annotationAttachments, predicateFunction);
    }


    setFlags(newValue, silent, title) {
        const oldValue = this.flags;
        title = (_.isNil(title)) ? `Modify ${this.kind}` : title;
        this.flags = newValue;

        if (!silent) {
            this.trigger('tree-modified', {
                origin: this,
                type: 'modify-node',
                title,
                data: {
                    attributeName: 'flags',
                    newValue,
                    oldValue,
                },
            });
        }
    }

    getFlags() {
        return this.flags;
    }


}

export default AbstractEnumNode;
